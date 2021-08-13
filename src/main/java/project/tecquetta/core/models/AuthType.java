package project.tecquetta.core.models;

public enum AuthType {
    AGC("Authorization Code Grant");

    final String value;

    AuthType(String value) {
        this.value = value; 
    }
}
