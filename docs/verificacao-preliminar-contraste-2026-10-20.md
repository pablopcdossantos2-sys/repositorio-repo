# Verificação preliminar de contraste — 20/10/2026

**Escopo:** cálculo estático de contraste de cores declaradas em `produto/styles.css`, aplicado às combinações selecionadas. Não é uma auditoria WCAG completa e não substitui a inspeção visual de estados reais no navegador.

## Método

Calculou-se a razão de contraste relativa entre as cores sRGB hexadecimais conforme a fórmula de luminância relativa do WCAG. Para texto comum, a referência WCAG 2.2 SC 1.4.3 é 4,5:1; para texto grande, 3:1. Para informação visual não textual necessária para identificar controles ou estados, a referência aplicável do SC 1.4.11 é 3:1 contra cores adjacentes. A aplicabilidade a cada borda deve ser avaliada considerando o controle completo, não isolando elementos decorativos.

## Resultados calculados

| Combinação CSS examinada | Razão | Leitura preliminar |
|---|---:|---|
| Texto principal `#172b3b` / branco `#ffffff` | 14,53:1 | Atende 4,5:1 para texto comum |
| Texto secundário `#526779` / branco `#ffffff` | 5,87:1 | Atende 4,5:1 |
| Texto secundário `#526779` / fundo `#f4f7fb` | 5,47:1 | Atende 4,5:1 |
| Botão primário `#155eef` / branco | 5,41:1 | Atende 4,5:1 |
| Hover primário `#1048b8` / branco | 7,95:1 | Atende 4,5:1 |
| Foco `#005fcc` / branco | 5,98:1 | Atende 3:1 para indicador de foco, considerando apenas contraste de cor |
| Foco `#005fcc` / fundo `#f4f7fb` | 5,57:1 | Atende 3:1 para indicador de foco, considerando apenas contraste de cor |
| Feedback de sucesso `#155e42` / branco | 7,74:1 | Atende 4,5:1 |
| Feedback de nova tentativa `#8a4b00` / branco | 6,80:1 | Atende 4,5:1 |
| Texto ativo `#103f9b` / fundo `#e6eeff` | 8,18:1 | Atende 4,5:1 |
| Borda padrão `#7d8c99` / branco | 3,45:1 | Acima de 3:1; avaliar no contexto do componente |
| Borda padrão `#7d8c99` / fundo `#f4f7fb` | 3,21:1 | Acima de 3:1; avaliar no contexto do componente |
| Texto auxiliar `#526779` / cartão `#f7f9fc` | 5,57:1 | Atende 4,5:1 |
| Borda da etapa ativa `#9ab9ff` / fundo `#e6eeff` | 1,68:1 | Abaixo de 3:1 se a borda for necessária para identificar o estado |
| Borda de checklist marcado `#8db1ff` / fundo `#f0f6ff` | 1,96:1 | Abaixo de 3:1 se a borda for necessária para identificar o estado |
| Borda amarela do aviso `#f2d58a` / fundo `#fff6df` | 1,33:1 | Baixo contraste; confirmar se é apenas decorativa ou carrega informação necessária |

## Achados e ações recomendadas

1. As combinações de texto e fundo examinadas atendem aos limiares de contraste de texto comum nas amostras calculadas.
2. Recomenda-se revisar a borda da etapa ativa (`#9ab9ff`) e a borda do checklist marcado (`#8db1ff`). Se forem necessárias para identificar o estado, escurecer essas cores ou oferecer outro indicador visual com contraste suficiente. Não é necessário alterar cores apenas decorativas sem avaliar o contexto.
3. A borda amarela do aviso tem contraste baixo com seu fundo. Se o aviso depende da borda para ser reconhecido como aviso, reforçar o contraste ou garantir um indicador adicional robusto; o texto do aviso e a borda azul da caixa informativa foram calculados separadamente.
4. A verificação não cobre todas as combinações, estados de hover/pressed/focus, cores nativas dos inputs, transparências, renderização real, diferenças de navegador nem contraste em ampliação. Não declarar conformidade integral WCAG com base neste registro.
5. A razão de contraste não avalia por si só espessura, área, persistência, visibilidade ou sobreposição do foco. Esses aspectos continuam sujeitos a teste manual.

## Próximo passo

Registrar as combinações a corrigir/validar no roteiro de auditoria; aplicar mudanças de CSS apenas depois de verificar a necessidade do indicador visual e repetir os cálculos. Após qualquer mudança no produto, executar novamente a suíte automatizada e os testes manuais aplicáveis.
