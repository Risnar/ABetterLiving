package ch.zhaw.mobileeng.abetterliving.repository;

import ch.zhaw.mobileeng.abetterliving.model.Tasks;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Tasks, Long> {

}
