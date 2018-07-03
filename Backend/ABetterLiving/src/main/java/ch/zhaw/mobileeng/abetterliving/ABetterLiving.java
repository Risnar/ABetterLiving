/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.zhaw.mobileeng.abetterliving;

import ch.zhaw.mobileeng.abetterliving.boundary.*;

import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.ServerProperties;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.h2.server.web.WebServlet;

@SpringBootApplication
public class ABetterLiving extends ResourceConfig {

    public static void main(String[] args) {
        SpringApplication.run(ABetterLiving.class, args);
    }

    public ABetterLiving() {
        property(ServerProperties.RESPONSE_SET_STATUS_OVER_SEND_ERROR, true);
        register(CorsFilter.class);
        register(TaskService.class);
        register(UserService.class);
    }

    @Bean
    ServletRegistrationBean h2servletRegistration() {
        ServletRegistrationBean registrationBean = new ServletRegistrationBean(new WebServlet());
        registrationBean.addUrlMappings("/console/*");
        return registrationBean;
    }

    @Bean
    CommandLineRunner runner() {
        return args -> {
            System.out.println("CommandLineRunner running in the UnsplashApplication class...");
        };
    }
}
