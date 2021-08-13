package project.tecquetta.core.models;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import lombok.Data; 

@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION,
        proxyMode = ScopedProxyMode.TARGET_CLASS)
@Data
public class Session {
    
    private static final long serialVersionUID = 2695379118371574037L;

    private String accountId; 
    private String accountName; 
    private String basePath; 
    private String roomsBasePath; 
    private String envelopeId; 
    private String templateName; 
    private List<EnvelopeDocumentInfo> envelopeDocuments; 
    private String permissionProfileId; 
    private String permissionProfileName; 
    private String apiIndexPath; 
    private AuthType authTypeSelected = AuthType.AGC; 
    private boolean refreshToken = false; 
    private String clickwrapId; 
    private String clickwrapVersionNumber; 

    public String getAccountId(){
        return this.accountId;
    }

    public String getBasePath(){
        return this.basePath;
    }

    public String getEnvelopeId(){
        return this.envelopeId;
    }

    public void setEnvelopeId(String envelopeId){
        this.envelopeId = envelopeId;
    }


    public void setRefreshToken(boolean tokenExpired) {
        if(tokenExpired)
            this.refreshToken = true; 
    }
}
