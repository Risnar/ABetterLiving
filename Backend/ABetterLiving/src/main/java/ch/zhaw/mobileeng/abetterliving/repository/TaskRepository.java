package ch.zhaw.mobileeng.abetterliving.repository;

import ch.zhaw.mobileeng.abetterliving.model.Tasks;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Tasks, Long> {

    
    @Query("SELECT t FROM Tasks t where t.list.ListID = :id")
    public Iterable<Tasks> getAllTasksByListID(long id);
}
