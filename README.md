# MKT Landing 3eme période

Landing page pour la campagne 3eme période

### Préprocesseurs :
* [JADE](http://jade-lang.com/)
* [LESS](http://lesscss.org/)
* [STYLUS](http://learnboost.github.io/stylus/)

Pour utiliser LESS ou STYLUS, commentez/décommentez dans grunt/dev, grunt/release

### Pour utiliser le moteur

Si c'est la première fois que vous allez utiliser un moteur sous node.js, installez node.js.

Puis, dans un terminal :
```
npm i -g grunt-cli
```

```
npm update npm -g
```

```
npm i -D phantomjs
```

Vous êtes maintenant prêt à utiliser la puissance de node.js.

Après avoir cloner le repo sur votre ordi, dans le dossier du projet :
```
npm install && grunt dev && grunt concurrent:start
```

Lancez ensuite [le serveur node](http://0.0.0.0:9000/), et voila :-)