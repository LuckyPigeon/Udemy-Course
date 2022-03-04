mkdir ~/.virtualenvs
sudo apt update && sudo apt install python3 python3-pip vim
pip3 --version
pip3 install virtualenv
which virtualenv
pip3 install virtualenvwrapper

VIRTUALENVWRAPPER_PYTHON="export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3"
WORKON_HOME="export WORKON_HOME=~/.virtualenvs"
VIRTUALENVWRAPPER="export VIRTUALENVWRAPPER_VIRTUALENV=~/.local/bin/virtualenv"
SOURCE="source ~/.local/bin/virtualenvwrapper.sh"

echo $VIRTUALENVWRAPPER_PYTHON >> ~/.bashrc
echo $WORKON_HOME >> ~/.bashrc
echo $VIRTUALENVWRAPPER >> ~/.bashrc
echo $SOURCE >> ~/.bashrc

echo 'Now you can use mkvirtualenv <name_of_your_env> to create your virtual environments'
