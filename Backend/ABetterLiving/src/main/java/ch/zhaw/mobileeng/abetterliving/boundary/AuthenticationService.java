/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.zhaw.mobileeng.abetterliving.boundary;

import ch.zhaw.mobileeng.abetterliving.model.Users;
import ch.zhaw.mobileeng.abetterliving.repository.UserRepository;
import ch.zhaw.mobileeng.abetterliving.security.JWTUtility;
import ch.zhaw.mobileeng.abetterliving.dto.AuthorizationToken;
import java.util.HashMap;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;

@Path("/login")
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JWTUtility jwtUtility;

    @GET
    @CrossOrigin
    @Produces(MediaType.APPLICATION_JSON)
    public Object login() {
        try {
            SecurityContext context = SecurityContextHolder.getContext();
            Authentication authentication = context.getAuthentication();
            Users user = userRepository.findUserByUsername(authentication.getName());

            if (user == null) {
                return ResponseHandler.response("Login status", "Username does not exists", "login", false, null);
            }

            AuthorizationToken token = jwtUtility.generate(authentication);
            return ResponseHandler.response("Login status", "Login successful", "login", true, token);
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
}
