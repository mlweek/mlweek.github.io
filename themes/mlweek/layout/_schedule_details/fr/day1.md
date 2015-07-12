## Principes de base & Rappels mathématiques
Qu'est-ce que l'apprentissage de la machine ?
Nous allons échanger sur les grandes lignes du sujet afin de comprendre comment aborder différents problèmes :
* apprentissage supervisé et non supervisé,
* apprentissage par renforcement,
* classificateurs linéaires et non-linéaires

Comment pouvons-nous transformer problèmes du monde réel dans les formalismes qui nous permettent d'appliquer l'apprentissage machine et utilisent des systèmes informatiques pour résoudre les problèmes?

Nous effectuerons un révision rapide des notions de probabilités, des statistiques et l'algèbre linéaire. Si ces notions vous rappellent de mauvais souvenirs de l'Université, pas de panique, nous ferons en sorte que cette remise à niveau se fasse sans douleur grace à des schémas intuitifs.

## Régression Linéaire
Modéliser la relation entre les variables à valeurs réelles. Utilisez un modèle pour prédire des valeurs inconnues et de comprendre la force de votre prédiction.
Au moment de la modélisation de variables continues, la régression linéaire est souvent le premier outil à utiliser, et de simples variations permettent de  traiter un nombre étonnamment important de problèmes.

![Régression linéraire](https://upload.wikimedia.org/wikipedia/commons/3/3a/Linear_regression.svg)
![Polyreg_scheffe](https://upload.wikimedia.org/wikipedia/commons/8/8b/Polyreg_scheffe.svg)

Image source: Wikimedia Commons

## Régression logistique
La régression logistique est un cheval de travail de l'apprentissage automatique. Des variations mineures vont nous emmener sur le chemin des réseaux de neurones et l'apprentissage en profondeur. Il s'agit de modèle probabiliste pour séparer variables catégorielles. Nous construirons des séparateurs afin de prédire ou classer. Les exemples incluent la maladie prédire, les élections et les échecs d'ingénierie (fusées explosent, ...).

Pour en savoir plus : http://www.cs.cmu.edu/~ggordon/IRLS-example/

## Machines à vecteurs de support (SVM)
Sur la route de régression logistique pour réseaux de neurones, un outil extraordinairement utile est la machine à vecteurs de support, aussi connu comme un grand classificateur de marge. Jusqu'à très récemment, SVM est la technique la plus connue pour de nombreuses tâches, parmi elles la reconnaissance d'écriture manuscrite (nous reviendrons au cours thèmes spéciaux de la journée du jeudi). Nous terminerons notre journée de lundi sur la façon dont cet algorithme fonctionne et ce que nous pouvons faire avec elle.
![Linear-svm-scatterplot](https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Linear-svm-scatterplot.svg/720px-Linear-svm-scatterplot.svg.png)
![Kernel_Machine](https://upload.wikimedia.org/wikipedia/commons/1/1b/Kernel_Machine.png)

Source: WikiMedia Commons
