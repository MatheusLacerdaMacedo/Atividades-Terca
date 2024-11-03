public class Funcionario extends Pessoa {
    private int matricula;
    private double salario;

    // Default constructor
    public Funcionario() {
        this.matricula = 0;
        this.salario = 0.0;
    }

    // Parameterized constructor
    public Funcionario(String nome, String sobrenome, int matricula, double salario) {
        super(nome, sobrenome);
        this.matricula = matricula;
        this.salario = salario;
    }

    // Getter for matricula
    public int getMatricula() {
        return matricula;
    }

    // Setter for matricula
    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    // Getter for salario
    public double getSalario() {
        return salario;
    }

    // Setter for salario with validation
    public void setSalario(double salario) throws Exception {
        if (salario < 0) {
            throw new Exception("Salário inválido");
        }
        this.salario = salario;
    }

    // Method to get the first salary installment
    public double getSalarioPrimeiraParcela() {
        return salario * 0.6;
    }

    // Method to get the second salary installment
    public double getSalarioSegundaParcela() {
        return salario * 0.4;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Informe seu nome:");
        String nome = scanner.nextLine();

        System.out.println("Informe seu sobrenome:");
        String sobrenome = scanner.nextLine();

        System.out.println("Informe a matrícula:");
        int matricula = Integer.parseInt(scanner.nextLine());

        System.out.println("Informe o salário:");
        double salario = Double.parseDouble(scanner.nextLine());

        Funcionario funcionario = new Funcionario(nome, sobrenome, matricula, salario);

        System.out.println("Nome completo: " + funcionario.getNomeCompleto());
        System.out.println("Primeira parcela do salário: " + funcionario.getSalarioPrimeiraParcela());
        System.out.println("Segunda parcela do salário: " + funcionario.getSalarioSegundaParcela());

        scanner.close();
    }
}
