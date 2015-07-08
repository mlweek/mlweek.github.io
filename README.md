# ML Week WebSite

## Install Hexo
```
npm install hexo-cli -g
```

Sur linux, à moins qu'on veut installer dans `/usr/local/` comme root, c'est sans "-g" :
```
npm install hexo-cli
```

## Install dependencies
```
npm install
```

## Test local
```
hexo server
```

Sur ubuntu, `node` s'appelle `nodejs`.  Si l'installation est locale,
il faut préciser le path :


```
nodejs ./node_modules/hexo/bin/hexo server
```

## Push in production
```
hexo deploy
```

ou

```
nodejs ./node_modules/hexo/bin/hexo deploy
```
