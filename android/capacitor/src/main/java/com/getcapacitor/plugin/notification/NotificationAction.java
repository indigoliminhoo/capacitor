package com.getcapacitor.plugin.notification;

import android.util.Log;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Action types that will be registered for the notifications
 */
public class NotificationAction {

  private String id;
  private String title;

  public NotificationAction() {
  }

  public NotificationAction(String id, String title) {
    this.id = id;
    this.title = title;
  }

  public static Map<String, NotificationAction[]> buildTypes(JSArray types) {
    Map<String, NotificationAction[]> actionTypeMap = new HashMap<>();
    try {
      List<JSONObject> objects = types.toList();
      if (objects != null) {
        for (JSONObject obj : objects) {
          JSObject jsObject = JSObject.fromJSONObject(obj);
          String actionGroupId = jsObject.getString("id");
          if (actionGroupId == null) {
            return null;
          }
          JSONArray actions = jsObject.getJSONArray("actions");
          if (actions != null) {
            NotificationAction[] typesArray = new NotificationAction[actions.length()];
            for (int i = 0; i < typesArray.length; i++) {
              NotificationAction notificationAction = new NotificationAction();
              JSONObject action = actions.getJSONObject(i);
              notificationAction.setId(action.getString("id"));
              notificationAction.setTitle(action.getString("title"));
              typesArray[i] = notificationAction;
            }
            actionTypeMap.put(actionGroupId, typesArray);
          }
        }
      }
    } catch (Exception e) {
      Log.e("LNActionType", "Error when building action types", e);
    }
    return actionTypeMap;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

}
