package com.example.boxinator.models;

import javax.persistence.*;

@Entity
@Table(name = "package")
public class Packages {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "weight")
    private int weight;

    @Column(name = "colour")
    private String colour;

    @Column(name = "country")
    private String country;

    public Packages() {

    }

    public Packages(Integer id, String name, int weight, String colour, String country) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.colour = colour;
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public int getWeight() {
        return weight;
    }

    public String getColour() {
        return colour;
    }

    public String getCountry() {
        return country;
    }

    @Id
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
