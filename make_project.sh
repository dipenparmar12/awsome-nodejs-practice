git clone --depth=1 -b starter git@github.com:dipenparmar12/awsome-nodejs-practice.git $1 
cd $1
git checkout starter
git checkout -b $1
cp -rv ./starter ./$1
cd $1