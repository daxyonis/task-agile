package com.evkosoft.taskagile.web.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class RegistrationPayload {
	@Size(min = 2, max = 50, message = "Username must be between 2 and 50 characters")
	@NotNull
	private String username;

	@Email(message = "Email address should be valid")
	@Size(max = 100, message = "Email address must not be more than 100 characters")
	@NotNull
	private String emailAddress;

	@Size(min = 6, max = 30, message = "Password must be between 6 and 30 characters")
	@NotNull
	private String password;
}