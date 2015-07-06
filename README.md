# ML Week WebSite

## Install Hexo
```
npm install hexo-cli -g    # prod
```
ou
```
npm install hexo-cli
```

## Install dependencies
```
npm install
```

## Test local
```
hexo server    # prod
```
ou
```
./node_modules/hexo/bin/hexo server
```

Sur ubuntu, l'application s'appelle nodejs et pas node.  Il faut donc préciser l'interpréteur:
```
nodejs ./node_modules/hexo/bin/hexo server
```

## Push in production
```
hexo deploy
```
