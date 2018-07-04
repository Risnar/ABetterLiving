/*
 * Copyright 2018 Peter Heinrich <peter.heinrich@zhaw.ch>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package ch.zhaw.mobileeng.abetterliving.security;

import ch.zhaw.mobileeng.abetterliving.model.Users;
import ch.zhaw.mobileeng.abetterliving.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.security.core.userdetails.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 *
 * @author Peter Heinrich <peter.heinrich@zhaw.ch>
 */
@Component
public class UserDetailService implements UserDetailsService {

    @Autowired
    UserRepository users;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Users userAccount = users.findUserByUsername(username);

        if (userAccount == null) {
            throw new UsernameNotFoundException(username + " was not found");
        }

        List<String> roles = new ArrayList<>();
        roles.add("user");
        List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(roles.stream().toArray(String[]::new));

        User user = new User(userAccount.getUsername(), userAccount.getPassword(), authorities);
        return user;

    }
}
