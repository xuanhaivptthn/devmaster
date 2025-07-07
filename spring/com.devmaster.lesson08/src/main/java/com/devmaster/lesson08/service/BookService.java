package com.devmaster.lesson08.service;

import com.devmaster.lesson08.entity.Book;
import com.devmaster.lesson08.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    // Lấy danh sách Book
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // Lấy theo id
    public Book getBookByID(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    // Cập nhật
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
