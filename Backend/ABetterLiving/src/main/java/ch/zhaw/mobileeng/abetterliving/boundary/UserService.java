package ch.zhaw.mobileeng.abetterliving.boundary;


import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;


@Path("/user")
public class UserService {
    /*@POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> checkUserLogin() {
        List<Part> resList = new ArrayList<>();
        for (String s : InventoryRepository.getInstance().getParts().keySet()) {
            resList.add(InventoryRepository.getInstance().getParts().get(s));
        }
        return resList;
    }*/
}
