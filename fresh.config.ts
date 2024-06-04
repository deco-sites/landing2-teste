import { defineConfig } from "$fresh/server.ts";
import plugins from "https://cdn.jsdelivr.net/gh/deco-sites/std@1.26.5/plugins/mod.ts";
import manifest from "./manifest.gen.ts";
import tailwind from "./tailwind.config.ts";

export default defineConfig({
  plugins: plugins({
    manifest,
    // deno-lint-ignore no-explicit-any
    tailwind: tailwind as any,
  }),
});
# Create a new PDF with the latest improved copy

# Create instance of FPDF class
  pdf = FPDF()

# Add a page
pdf.add_page()

# Set title
pdf.set_font("Arial", size = 12)
pdf.cell(200, 10, txt = "Landing Page de Conversão de Vendas - TAXFLOW", ln = True, align = 'C')

# Add latest improved content
latest_content = """
Eleve Seu Negócio com a Taxflow

Sua Gestão Contábil e Tributária Transformada

A Taxflow é mais do que uma contabilidade comum.Somos parceiros estratégicos no crescimento do seu negócio, oferecendo soluções completas e personalizadas que vão além do básico.

Por que a Taxflow é a Escolha Certa ?

  - +40 Milhões em Impostos Recuperados
    - +18 Milhões em Economia Gerada
      - 500 Clientes Satisfeitos
        - Presença em 17 Estados

Nossos Diferenciais

🔍 Expertise em Inteligência Fiscal
Identificamos todas as oportunidades de economia tributária para maximizar seus lucros.Nossos especialistas analisam detalhadamente sua situação fiscal para garantir o melhor aproveitamento dos benefícios fiscais.

🤝 Atendimento Personalizado
Nosso atendimento é feito via WhatsApp, proporcionando rapidez e eficiência.Conte com uma equipe dedicada e sempre pronta para atender suas necessidades específicas.

📊 Relatórios Claros e Visuais
Facilitamos a compreensão dos seus dados financeiros com dashboards interativos e relatórios detalhados em Power BI.Transformamos números complexos em informações acessíveis e práticas.

Vamos Além das Guias Fiscais

Na Taxflow, exploramos cada possibilidade para reduzir impostos e aumentar sua margem de lucro.Nossa abordagem proativa garante que você esteja sempre à frente.

Decisões Baseadas em Dados Concretos

Com nossos relatórios intuitivos, você pode tomar decisões estratégicas com confiança.Entenda seu fluxo de caixa e resultados financeiros de maneira clara e objetiva.

Pronto para a Transformação ?

  Entre em contato com nossos especialistas pelo WhatsApp e descubra como a Taxflow pode revolucionar a gestão da sua empresa.A mudança começa agora!
"""

pdf.set_font("Arial", size = 12)
pdf.multi_cell(0, 10, txt = latest_content)

# Save the pdf with new name
latest_pdf_output = "/mnt/data/Nova_Copy_para_Landing_Page_de_Conversao_de_Vendas_da_TAXFLOW.pdf"
pdf.output(latest_pdf_output)

latest_pdf_output
