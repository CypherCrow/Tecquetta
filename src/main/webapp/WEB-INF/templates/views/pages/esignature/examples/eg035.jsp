<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../../../partials/head.jsp"/>

<h4>2. Send an envelope via SMS delivery</h4>
<p>The envelope includes a pdf, Word, and HTML document. Anchor text
    (<a href="https://support.docusign.com/en/guides/AutoPlace-New-DocuSign-Experience">AutoPlace</a>)
    is used to position the signing fields in the documents.
</p>
<p>This is a general example of creating and sending an envelope (a signing request) to a recipient and notifying that recipient with an SMS message..</p>
<c:if test="${showDoc}">
    <p><a target='_blank' href='${documentation}'>Documentation</a> about this example.</p>
</c:if>

<p>API method used:
    <a target='_blank' rel="noopener noreferrer" href="https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/create">Envelopes::create</a>.
</p>

<p>
    View source file <a target="_blank" href="${sourceUrl}">${sourceFile}</a> on GitHub.
</p>

<form class="eg" action="" method="post" data-busy="form">

    <div class="form-group">
        <label for="countryCode">Signer Country Code</label>
        <input type="tel" class="form-control" id="countryCode" name="countryCode"
              aria-describedby="accessHelp" placeholder="1" required
        <small id="accessHelp" class="form-text text-muted">The country code for the phone number below.</small>
      </div>  
    <div class="form-group">
        <label for="phoneNumber">Signer Phone Number</label>
        <input type="text" class="form-control" id="phoneNumber" placeholder="415-555-1212" name="phoneNumber"
               value="" required>
        <small id="emailHelp" class="form-text text-muted">We'll never share your phone number with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="signerEmail">Signer Email</label>
        <input type="email" class="form-control" id="signerEmail" name="signerEmail"
               aria-describedby="emailHelp" placeholder="pat@example.com" required
               value="${locals.dsConfig.signerEmail}">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="signerName">Signer Name</label>
        <input type="text" class="form-control" id="signerName" placeholder="Pat Johnson" name="signerName"
               value="${locals.dsConfig.signerName}" required>
    </div>
    <div class="form-group">
        <label for="ccCountryCode">CC Country Code</label>
        <input type="tel" class="form-control" id="ccCountryCode" name="ccCountryCode"
              aria-describedby="accessHelp" placeholder="1" required
        <small id="accessHelp" class="form-text text-muted">The country code for the phone number below.</small>
    </div> 
    <div class="form-group">
        <label for="ccPhoneNumber">CC Phone Number</label>
        <input type="text" class="form-control" id="ccPhoneNumber" placeholder="415-555-1212" name="ccPhoneNumber"
               value="" required>
        <small id="emailHelp" class="form-text text-muted">We'll never share your phone number with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="ccEmail">CC Email</label>
        <input type="email" class="form-control" id="ccEmail" name="ccEmail"
               aria-describedby="emailHelp" placeholder="pat@example.com" required>
        <small id="emailHelp" class="form-text text-muted">The email and/or name for the cc recipient must be different
            from the signer.
        </small>
    </div>
    <div class="form-group">
        <label for="ccName">CC Name</label>
        <input type="text" class="form-control" id="ccName" placeholder="Pat Johnson" name="ccName"
               required>
    </div>
    <input type="hidden" name="_csrf" value="${csrfToken}">
    <button type="submit" class="btn btn-docu">Submit</button>
</form>

<jsp:include page="../../../partials/foot.jsp"/>
