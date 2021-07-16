<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../../../partials/head.jsp"/>

<h4>14. Send an envelope with an order form, including a payment field.</h4>

<h5 style="color: purple;">Note: This example will only work if the sender's DocuSign account
    is set up with a DocuSign payment gateway. Since the Payment Gateway ID
    is set in the configuration file, you will need to run your
    own instance of this project to set it.
</h5>

<p>Anchor strings
    (<a href="https://support.docusign.com/en/guides/AutoPlace-New-DocuSign-Experience">AutoPlace</a>)
    are used to position the fields in the documents.
</p>

<c:if test="${showDoc}">
<p><a target='_blank' href='${documentation}'>Documentation</a> about this example.</p>
</c:if>

<p>API method used:
    <a target='_blank' rel="noopener noreferrer" href="https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/create">Envelopes::create</a>.
</p>

<p>
    View source file <a target="_blank" href="${sourceUrl}">${sourceFile}</a> on GitHub.
</p>

<c:choose>
    <c:when test="${gatewayOk}">
        <form class="eg" action="" method="post" data-busy="form">
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
                <label for="ccEmail">CC Email</label>
                <input type="email" class="form-control" id="ccEmail" name="ccEmail"
                       aria-describedby="emailHelp" placeholder="pat@example.com" required>
                <small id="emailHelp" class="form-text text-muted">The email for the cc recipient must be different from the signer's email.</small>
            </div>
            <div class="form-group">
                <label for="ccName">CC Name</label>
                <input type="text" class="form-control" id="ccName" placeholder="Pat Johnson" name="ccName"
                       required>
            </div>
            <input type="hidden" name="_csrf" value="${csrfToken}">
            <button type="submit" class="btn btn-docu">Submit</button>
        </form>
    </c:when>
    <c:otherwise>
        <p>Problem: please set the <strong>DS_PAYMENT_GATEWAY_ID</strong> value in the configuration file.</p>
    </c:otherwise>
</c:choose>

<jsp:include page="../../../partials/foot.jsp"/>
