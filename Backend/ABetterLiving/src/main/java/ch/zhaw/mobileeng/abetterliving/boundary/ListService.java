package ch.zhaw.mobileeng.abetterliving.boundary;

import ch.zhaw.mobileeng.abetterliving.model.Lists;
import ch.zhaw.mobileeng.abetterliving.repository.ListRepository;

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

@Path("/list")
public class ListService {

    @Autowired
    private ListRepository listRepository;

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Lists> getAllEntries() {
        List<Lists> resList = new ArrayList<>();
        for (Lists l : listRepository.findAll()) {
            resList.add(l);
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
    public Object updateEntry(Lists l, @PathParam("id") Long id) {
        try {
            l.setListID(id);
            Lists saved = listRepository.save(l);
            return ResponseHandler.response("Update successful", "", "put", true, saved);
        } catch (Exception e) {
            return ResponseHandler.response("Update failed", e.getMessage(), "put", false, null);
        }
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Object addEntry(Lists l) {
        try {
            l.setListID(null);
            Lists saved = listRepository.save(l);
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
