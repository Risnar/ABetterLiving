/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.zhaw.mobileeng.abetterliving.boundary;

import java.util.Date;
import java.util.HashMap;

public class ResponseHandler {

    public static HashMap<String, Object> response(String description, String msg, String action, boolean succeed, Object data) {
        HashMap<String, Object> out = new HashMap<>();
        out.put("title", description);
        out.put("msg", msg);
        out.put("action", action);
        out.put("successful", succeed);
        out.put("timestamp", new Date());
        out.put("data", data);
        return out;
    }

}
