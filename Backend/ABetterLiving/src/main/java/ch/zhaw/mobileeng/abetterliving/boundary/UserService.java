package ch.zhaw.mobileeng.abetterliving.boundary;

import ch.zhaw.mobileeng.abetterliving.model.Users;
import ch.zhaw.mobileeng.abetterliving.repository.UserRepository;

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
import org.springframework.beans.factory.annotation.Autowired;

@Path("/user")
public class UserService {

    @Autowired
    private UserRepository listRepository;

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Users> getAllEntries() {
        List<Users> resList = new ArrayList<>();
        for (Users u : listRepository.findAll()) {
            resList.add(u);
        }
        return resList;
    }

    @GET
    @Path("/id/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Object getEntryByID(@PathParam("id") Long id) {
        try {
            return listRepository.findById(id).get();
        } catch (Exception e) {
            return ResponseHandler.response("Request failed", e.getMessage(), "get", false, null);
        }
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object updateEntry(Users u, @PathParam("id") Long id) {
        try {
            u.setUserID(id);
            Users saved = listRepository.save(u);
            return ResponseHandler.response("Update successful", "", "put", true, saved);
        } catch (Exception e) {
            return ResponseHandler.response("Update failed", e.getMessage(), "put", false, null);
        }
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Object addEntry(Users u) {
        try {
            u.setUserID(null);
            Users saved = listRepository.save(u);
            return ResponseHandler.response("Insert successful", "", "post", true, saved);
        } catch (Exception e) {
            return ResponseHandler.response("Insert failed", e.getMessage(), "post", false, null);
        }
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Object deleteEntry(@PathParam("id") Long id) {
        try {
            listRepository.deleteById(id);
            return ResponseHandler.response("Delete successful", "", "post", true, null);
        } catch (Exception e) {
            return ResponseHandler.response("Delete failed", e.getMessage(), "post", false, null);
        }
    }
}
