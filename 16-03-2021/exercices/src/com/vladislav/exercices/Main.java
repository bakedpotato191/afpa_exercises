package com.vladislav.exercices;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // Exercice 1
        int an;
        Scanner myObj = new Scanner(System.in);

        do{
            System.out.println("Saisir un an");
            an = myObj.nextInt();
        }
        while(an <= 0);

        if ((an % 4 == 0) & (an % 100 != 0)) {
            System.out.println(an + " est bissextile");
        } else if (an % 400 == 0) {
            System.out.println(an + " est bissextile");
        } else {
            System.out.println(an + " n'est pas bissextile");
        }


        // Exercice 2
        int nombre;
        Scanner myObj1 = new Scanner(System.in);

        do{
            System.out.println("Saisir un nombre positif");
            nombre = myObj1.nextInt();
        }
        while(nombre <= 0);

        if (nombre == 1) {
            System.out.println(nombre + "est un nombre composé");
            System.exit(0);
        } else {
            for (int i = 2; i < Math.sqrt(nombre); ++i) {
                if (nombre % i == 0) {
                    System.out.println(nombre + " est un nombre composé");
                    System.exit(0);
                }
            }
            System.out.println(nombre + " est un nombre premier");
        }
    }
}

