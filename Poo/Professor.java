public class Professor extends Funcionario {

    // Default constructor
    public Professor() {
        super();
    }

    // Parameterized constructor
    public Professor(String nome, String sobrenome, int matricula, double salario) {
        super(nome, sobrenome, matricula, salario);
    }

    // Overriding getSalarioPrimeiraParcela to return the full salary
    @Override
    public double getSalarioPrimeiraParcela() {
        return getSalario(); // Returns the full salary
    }

    // Overriding getSalarioSegundaParcela to return zero
    @Override
    public double getSalarioSegundaParcela() {
        return 0.0; // Professors receive their salary in one installment, so the second installment is zero
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

        Professor professor = new Professor(nome, sobrenome, matricula, salario);

        System.out.println("Nome completo: " + professor.getNomeCompleto());
        System.out.println("Primeira parcela do salário: " + professor.getSalarioPrimeiraParcela());
        System.out.println("Segunda parcela do salário: " + professor.getSalarioSegundaParcela());

        scanner.close();
    }
}
