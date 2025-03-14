package com.devmaster.lesson07.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Họ tên không được để trống")
    @Size(min = 3, message = "Họ tên phải có ít nhất 3 kí tự")
    private String fullName;
    @Column(unique = true, nullable = false)
    private String username;
    @NotBlank(message = "Mật khẩu không được để trống")
    @Size(min = 8, message = "Mật khẩu phải có ít nhất 8 kí tự")
    private String password;
    @NotBlank(message = "Email không được để trống")
    @Email(message = "Email không đúng định dạng")
    private String email;

    @Pattern(regexp = "^\\+?[0-9](10,15)$", message = "Số đin thoại chỉ tồn tại kí tự số, chiều dài tối thiểu 10, tối đa 15")
    private String phone;
    private String address;
    private Boolean isActive;

}
