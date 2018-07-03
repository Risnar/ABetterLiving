package ch.zhaw.mobileeng.abetterliving.repository;

import javax.transaction.Transactional;
import org.springframework.stereotype.Component;
import ch.zhaw.mobileeng.abetterliving.model.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

@Component
@Transactional
public interface TaskRepository extends JpaRepository<Tasks, Long> {

}
