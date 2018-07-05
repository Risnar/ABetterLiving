package ch.zhaw.mobileeng.abetterliving.boundary;

import ch.zhaw.mobileeng.abetterliving.model.Tasks;
import ch.zhaw.mobileeng.abetterliving.repository.TaskRepository;

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

@Path("/task")
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Tasks> getAllTasks() {
        List<Tasks> resList = new ArrayList<>();
        for (Tasks t : taskRepository.findAll()) {
            resList.add(t);
        }
        return resList;
    }

    @GET
    @Path("/id/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Object getEntryByID(@PathParam("id") Long id) {
        try {
            return taskRepository.findById(id).get();
        } catch (Exception e) {
            return ResponseHandler.response("Request failed", e.getMessage(), "get", false, null);
        }
    }

    @GET
    @Path("/listid/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Object getEntryByListsID(@PathParam("id") Long id) {
        try {
            List<Tasks> resList = new ArrayList<>();
            for (Tasks t : taskRepository.getAllTasksByListID(id)) {
                resList.add(t);
            }
            return resList;
        } catch (Exception e) {
            return ResponseHandler.response("Request failed", e.getMessage(), "get", false, null);
        }
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object updateEntry(Tasks t, @PathParam("id") Long id) {
        try {
            t.setTaskID(id);
            Tasks saved = taskRepository.save(t);
            return ResponseHandler.response("Update successful", "", "put", true, saved);
        } catch (Exception e) {
            return ResponseHandler.response("Update failed", e.getMessage(), "put", false, null);
        }
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Object addEntry(Tasks t) {
        try {
            t.setTaskID(null);
            Tasks saved = taskRepository.save(t);
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
            taskRepository.deleteById(id);
            return ResponseHandler.response("Delete successful", "", "post", true, null);
        } catch (Exception e) {
            return ResponseHandler.response("Delete failed", e.getMessage(), "post", false, null);
        }
    }
}
