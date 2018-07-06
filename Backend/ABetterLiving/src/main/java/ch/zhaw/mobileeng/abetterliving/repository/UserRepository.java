package ch.zhaw.mobileeng.abetterliving.repository;

import ch.zhaw.mobileeng.abetterliving.model.Users;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Users, Object> {

    @Query("SELECT u FROM Users u where u.username = :username")
    public Users findUserByUsername(String username);

}
