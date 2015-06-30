var french = {};

// Banner
french.banner = {};
french.banner.title = "1 semaine au coeur de l'Apprentissage Automatique.";
french.banner.teaser = "4 jours pour comprendre les fondations de l'Apprentissage Automatique";
french.banner.description = "Nos principes : <br><br>C'est pratique.  Vous partirez avec une bonne compréhension des principes, une expérience avec des libraries, et des exemples de code que vous avez écrit pendant le cours. <br><br> Pas besoin d'être fort en maths, le but est la pratique.  Nous penchons sur l'intuition pour mieux comprendre rapidement la théorie. <br><br> À la fin de la semaine, vous serez capable d'attaquer des tout projet sauf les plus avancés.  Plus important, vous aurez la capacité d'en apprendre plus dans les domaines précis qui vous intéressent. <br><br> Un plus !  Votre inscription comprend le GDG Devfest de vendredi, où pour la première fois il y aura un parcours apprentissage automatique."

// buy_tickets
french.buy_tickets = {};
french.buy_tickets.title = 'Réservation';
french.buy_tickets.early_bird = {};
french.buy_tickets.early_bird.text = 'Prévente';
french.buy_tickets.early_bird.deadline = 'Deadline : August 15, 2015';
french.buy_tickets.early_bird.price = '1 700 €';
french.buy_tickets.early_bird.button = 'buy ticket';
french.buy_tickets.early_bird.button = '-30 %';

french.buy_tickets.standard = {};
french.buy_tickets.standard.text = 'Standard Ticket';
french.buy_tickets.standard.deadline = '&nbsp;';
french.buy_tickets.standard.price = '2 500 €';
french.buy_tickets.standard.button = 'Réserver';
french.buy_tickets.standard.promo = 'nouveau';

hexo.extend.helper.register('french', function() { return french; });
