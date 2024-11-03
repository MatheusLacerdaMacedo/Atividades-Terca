import java.util.Scanner;

public class Pessoa {
    private String nome;
    private String sobrenome;

    public Pessoa() {
        this.nome = "";
        this.sobrenome = "";
    }

    public Pessoa(String nome, String sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getNomeCompleto() {
        return nome + " " + sobrenome;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Informe seu nome:");
        String nome = scanner.nextLine();

        System.out.println("Informe seu sobrenome:");
        String sobrenome = scanner.nextLine();

        Pessoa pessoa = new Pessoa(nome, sobrenome);
        
        System.out.println("Nome completo: " + pessoa.getNomeCompleto());
        
        scanner.close();
    }
}
