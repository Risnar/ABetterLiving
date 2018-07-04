/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.zhaw.mobileeng.abetterliving.boundary;

import ch.zhaw.mobileeng.abetterliving.model.Lists;
import ch.zhaw.mobileeng.abetterliving.model.Users;
import ch.zhaw.mobileeng.abetterliving.repository.UserRepository;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;
import org.springframework.beans.factory.annotation.Autowired;

@Path("/")
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    /*@POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(HashMap<String, String> credentials) {
        if (!credentials.get("username").isEmpty() && !credentials.get("password").isEmpty()) {
            Users u = userRepository.findUserByUsername(credentials.get("username"));
            if (u.getPassword().equals(credentials.get("password"))) {
                Object
            }
    //https://www.mkyong.com/java/how-to-convert-java-object-to-from-json-jackson/
    //https://stackoverflow.com/questions/28004298/how-to-set-and-check-cookies-wih-jax-rs
                NewCookie newCookie = new NewCookie("user",u.t);
                login.addCookie(new Cookie("user", "json"));
            }
        } else {

        }

        return null;
    }*/
}
