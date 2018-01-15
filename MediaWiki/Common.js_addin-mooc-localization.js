/**
 * Esse arquivo JavaScript é parte do MOOC Addin.
 * 
 * Autores:
 * @author Sebastian Schlicht (https://en.wikiversity.org/wiki/User:Sebschlicht)
 * @author René Pickhardt (http://www.rene-pickhardt.de/)
 * 
 * Esse código JavaScript contém mensagens de localização usadas na interface MOOC.
 * Quando portado para outra instância do MediaWiki, este código pode ser alterado para aplicar o idioma apropriado.
 */
/* necessário evitar a interpretação de sequências de caracteres especiais e inscrições */
// <nowiki>

// mensagens de erro
AddinMooc_CONFIG.setMessage('ERR_INDEX_HEADER', 'malformed header: "$1"');
AddinMooc_CONFIG.setMessage('ERR_WADD_REQ', 'AddinMooc addSectionToPage: failed to add section "$2" to page "$1" (status code: $3)');
AddinMooc_CONFIG.setMessage('ERR_WCONTENT_REQ', 'AddinMooc doPageContentRequest: content request failed for page "$1", section $2 (status code: $3)');
AddinMooc_CONFIG.setMessage('ERR_WEDIT_REQ', 'AddinMooc doEditRequest: failed to edit page "$1" (status code: $2)');
AddinMooc_CONFIG.setMessage('ERR_WQUERY_VIDEO', 'AddinMooc getVideoUrls: failed to extract URL from missing field "$1"');
AddinMooc_CONFIG.setMessage('ERR_WTOKEN_MISSING', 'AddinMooc doEditTokenRequest: failed to get edit tokens for "$1" (server response: $2)');
AddinMooc_CONFIG.setMessage('ERR_WTOKEN_PARSING', 'AddinMooc parseEditTokens: failed to extract token from missing field "$1"');
AddinMooc_CONFIG.setMessage('ERR_WTOKEN_REQ', 'AddinMooc doEditTokenRequest: token request failed for pages "$1" (status code: $2)');
// log messages
AddinMooc_CONFIG.setMessage('LOG_ADD_CHILD', 'new child for $1 "$2": $3');//TODO: split $3 into type and name
AddinMooc_CONFIG.setMessage('LOG_DIS_NUMTHREADS', '$1 threads aggregated from $2 talk pages');
AddinMooc_CONFIG.setMessage('LOG_DIS_POST_INVALID', 'invalid post in thread #$1: $2');
AddinMooc_CONFIG.setMessage('LOG_DIS_THREAD_SECTION', 'thread "$1" is section $2');
AddinMooc_CONFIG.setMessage('LOG_INDEX', 'index located @ "$1" for MOOC "$2"');
AddinMooc_CONFIG.setMessage('LOG_INDEX_HEADER', '$1 "$2" in level $3 @ path $4');
AddinMooc_CONFIG.setMessage('LOG_PAGE_NOMOOC', 'nãoé umaágina MOOC');
AddinMooc_CONFIG.setMessage('LOG_WADD', 'AddinMooc addSectionToPage: adding section "$2" to page "$1"');
AddinMooc_CONFIG.setMessage('LOG_WADD_RES', 'AddinMooc addSectionToPage: server responded with "$1"');
AddinMooc_CONFIG.setMessage('LOG_WEDIT', 'AddinMooc doEditRequest: editing {{PLURAL:$2|0=|section $2 of }}page "$1"');
AddinMooc_CONFIG.setMessage('LOG_WEDIT_RES', 'AddinMooc doEditRequest: server responded with "$1"');
AddinMooc_CONFIG.setMessage('LOG_WPARSE', 'parsing "$1"');
AddinMooc_CONFIG.setMessage('LOG_WPARSE_RES', 'AddinMooc parseThreads: server responded with "$1"');
AddinMooc_CONFIG.setMessage('LOG_WQUERY_VIDEO_URL', 'URL for video "$1": $2');
AddinMooc_CONFIG.setMessage('LOG_WTOKEN_TOKEN', 'AddinMooc parseEditTokens: token for page "$1": "$2"');
// generated summaries
AddinMooc_CONFIG.setMessage('SUM_THREAD_ADD', 'Nova questão: "$1"');
AddinMooc_CONFIG.setMessage('SUM_THREAD_ADD_INDEX', 'atualização da estatística de discussão devido ao novo tópico');
AddinMooc_CONFIG.setMessage('SUM_THREAD_REPLY', 'respondido a "$1"');
AddinMooc_CONFIG.setMessage('SUM_THREAD_REPLY_INDEX', 'atualização estatística de discussão devido à resposta');
// apêndices resumidos
AddinMooc_CONFIG.setMessage('DEFSUMAPX_ADD_CHILD', '$1 adicionado');
// resumos padrão
AddinMooc_CONFIG.setMessage('DEFSUM_CREATE_INVOKE_PAGE', 'página invocada para MOOC $1 criada');
AddinMooc_CONFIG.setMessage('DEFSUM_EDIT_furtherReading', 'Leitura adicional alterada.');
AddinMooc_CONFIG.setMessage('DEFSUM_EDIT_learningGoals', 'Metas de aprendizagem alteradas.');
AddinMooc_CONFIG.setMessage('DEFSUM_EDIT_quiz', '');
AddinMooc_CONFIG.setMessage('DEFSUM_EDIT_QUIZ', 'Quiz atualizado para MOOC $1 "$2"');
AddinMooc_CONFIG.setMessage('DEFSUM_EDIT_script', '');
AddinMooc_CONFIG.setMessage('DEFSUM_SCRIPT', 'Roteiro atualizado para MOOC $1 "$2"');
AddinMooc_CONFIG.setMessage('DEFSUM_EDIT_video', 'Vídeo alterado.');
// valores padrão
AddinMooc_CONFIG.setMessage('DEFVAL_QUIZ', '<quiz display=simple>\n' +
  '{Exemplo de questão\n' +
  '|type="[]"}\n' +
  '+ Resposta correta.\n' +
  '- Resposta incorreta.\n' +
  '- Outra resposta incorreta.\n' +
  '</quiz>');
AddinMooc_CONFIG.setMessage('DEFVAL_SCRIPT', '<!-- Coloque seu $1 roteiro aqui -->');
// interface de usuário
AddinMooc_CONFIG.setMessage('UI_ASK_BTN_ASK', 'Fazer uma pergunta');
AddinMooc_CONFIG.setMessage('UI_ASK_LABEL_TITLE', 'Título da questão:');
AddinMooc_CONFIG.setMessage('UI_ASK_LABEL_CONTENT', 'Sua questão:');
AddinMooc_CONFIG.setMessage('UI_ASK_TITLE_MISSING', 'Você não pode fazer uma pergunta sem adicionar um título.');
AddinMooc_CONFIG.setMessage('UI_MODAL_BTN_add-lesson', 'Adicionar lição');
AddinMooc_CONFIG.setMessage('UI_MODAL_BTN_add-unit', 'Adicionar unidade');
AddinMooc_CONFIG.setMessage('UI_MODAL_BTN_create-mooc', 'Criar MOOC');
AddinMooc_CONFIG.setMessage('UI_MODAL_BTN_edit', 'Salvar');
AddinMooc_CONFIG.setMessage('UI_MODAL_HELP_addLesson', 'Observe que todos os sublinhados em um título de lição serão substituídos por espaços.');
AddinMooc_CONFIG.setMessage('UI_MODAL_HELP_addUnit', 'Observe que todos os sublinhados em um título de unidade serão substituídos por espaços.');
AddinMooc_CONFIG.setMessage('UI_MODAL_HELP_createMooc', 'Observe que todos os sublinhados em um título de um MOOC serão substituídos por espaços.');
AddinMooc_CONFIG.setMessage('UI_MODAL_HELP_furtherReading', 'Itens de leitura adicional são separados por novas linhas e iniciam com "#".');
AddinMooc_CONFIG.setMessage('UI_MODAL_HELP_learningGoals', 'Metas de aprendizagem são separadas por novas linhas e iniciam com "#".');
AddinMooc_CONFIG.setMessage('UI_MODAL_HELP_quiz', 'Dica: Use o link a seguir para editar o quiz:' +
  '<a href="http://pt.wikiversity.org/w/index.php?title=$1/quiz&action=edit">editar quiz externamente</a>' +
  '<br>Visite <a href="https://pt.wikiversity.org/wiki/Help:Quiz">Help:Quiz</a> para mais informações sobre formatos de quiz.');
AddinMooc_CONFIG.setMessage('UI_MODAL_HELP_script', 'Dica: Use o link a seguir para editar o roteiro:' +
  '<a href="http://pt.wikiversity.org/w/index.php?title=$1/script&action=edit">editar roteiro externamente</a>');
AddinMooc_CONFIG.setMessage('UI_MODAL_HELP_video', 'O vídeo pode ser um texto a ser exibido ou um arquivo de vídeo como "Arquivo: Video.ogv" que será exibido como miniatura. Tenha em mente que este arquivo deve existir em commons.wikimedia.org ou em pt.wikiversity.org.');
AddinMooc_CONFIG.setMessage('UI_MODAL_LABEL_SUMMARY', 'Digite um resumo da edição:');
AddinMooc_CONFIG.setMessage('UI_MODAL_LABEL_TITLE_addLesson', 'Digite o título da lição');
AddinMooc_CONFIG.setMessage('UI_MODAL_LABEL_TITLE_addUnit', 'Digite o título da unidade:');
AddinMooc_CONFIG.setMessage('UI_MODAL_LABEL_TITLE_createMooc', 'Digite o título do MOOC:');
AddinMooc_CONFIG.setMessage('UI_MODAL_LABEL_TITLE_furtherReading', 'Entre com leitura adicional:');
AddinMooc_CONFIG.setMessage('UI_MODAL_LABEL_TITLE_learningGoals', 'Entre com metas de aprendizagem:');
AddinMooc_CONFIG.setMessage('UI_MODAL_LABEL_TITLE_quiz', 'Entre com o quiz:');
AddinMooc_CONFIG.setMessage('UI_MODAL_LABEL_TITLE_script', 'Entre com o roteiro:');
AddinMooc_CONFIG.setMessage('UI_MODAL_LABEL_TITLE_video', 'Entre com o vídeo:');
AddinMooc_CONFIG.setMessage('UI_POST_SIGNATURE', 'postado em $1 por $2');
AddinMooc_CONFIG.setMessage('UI_REPLY_BTN_REPLY', 'Responder');
AddinMooc_CONFIG.setMessage('UI_REPLY_BTN_SEND', 'Enviar resposta');
AddinMooc_CONFIG.setMessage('UI_REPLY_LABEL_CONTENT', 'Sua resposta:');
AddinMooc_CONFIG.setMessage('UI_SECTION_BTN_EXPAND', '&#8595; Leia mais &#8595;');
AddinMooc_CONFIG.setMessage('UI_THREAD_BTN_EXPAND', '&#8595; Leia mais &#8595;');
AddinMooc_CONFIG.setMessage('UI_THREAD_LABEL_HEADER', '$1 {{PLURAL:$1|reply|replies}}');
AddinMooc_CONFIG.setMessage('UI_THREAD_UNSIGNED', 'Ninguém assinou esse tópico.');

AddinMooc_CONFIG.LOADED += 1;

// </nowiki>
