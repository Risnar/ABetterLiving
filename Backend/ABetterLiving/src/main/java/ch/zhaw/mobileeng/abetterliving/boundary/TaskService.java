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
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

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
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Tasks getTasksByID(@PathParam("id") int id) {
        return taskRepository.findById(Long.valueOf(id)).get();
    }

}
