package ch.zhaw.mobileeng.abetterliving.repository;

import javax.transaction.Transactional;
import org.springframework.stereotype.Component;
import ch.zhaw.mobileeng.abetterliving.model.Lists;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ListRepository extends CrudRepository<Lists, Long> {

}
