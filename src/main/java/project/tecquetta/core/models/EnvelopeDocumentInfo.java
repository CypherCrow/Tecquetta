package project.tecquetta.core.models;

import lombok.Value;

@Value
public class EnvelopeDocumentInfo {
    private static final long serialVersionUID = 8423772017910727550L;

    private String name;
    private String type;
    private String documentId; 
}
