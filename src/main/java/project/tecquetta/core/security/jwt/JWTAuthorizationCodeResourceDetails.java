package project.tecquetta.core.security.jwt;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import project.tecquetta.configuration.DSConfiguration;
import com.docusign.esign.client.ApiClient;
import com.docusign.esign.client.auth.OAuth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.util.FileCopyUtils;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JWTAuthorizationCodeResourceDetails {
    
    private String privateKeyPath; 
    private String impersonateUserGuid; 
    private String baseUrl; 

    @Autowired
    private DSConfiguration dsConfiguration;

    private FileSystemResource rsaPrivateKey;
    private final ApiClient apiClient = new ApiClient();

    public byte[] getRsaBytes() throws Exception {
        if(rsaPrivateKey == null) {
            rsaPrivateKey = new FileSystemResource(privateKeyPath);
        }
        try {
            return FileCopyUtils.copyToByteArray(rsaPrivateKey.getInputStream());
        }catch (IOException e){
            throw new Exception("Error reading rsa file. Check configuration."); 
        }
    }

    public ApiClient getApiClient() {
        return apiClient; 
    }

    public List<String> getScopeByApiName(){
        return dsConfiguration.getApiName().equalsIgnoreCase("esignature") ? 
            Arrays.asList(OAuth.Scope_SIGNATURE) :
            getScopeByApiName();
    }

}
