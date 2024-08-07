package com.todolist.backend.controller;

import com.todolist.backend.service.TodoService;
import org.springframework.web.bind.annotation.*;

import com.todolist.backend.entity.Todo;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/todos")
public class TodoController {
    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    List<Todo> create(@RequestBody Todo todo){
        return todoService.create(todo);
    }


    @GetMapping
    List<Todo>list(){
        return todoService.list();
    }

    @PutMapping
    List<Todo>update(@RequestBody Todo todo){
        return todoService.update(todo);
    }

    @DeleteMapping("{id}")
    List<Todo>delete(@PathVariable Long id){
        return todoService.delete(id);
    }
}
