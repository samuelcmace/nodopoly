#!/bin/bash
sudo mysql -u root -p < ./user-setup.sql
mysql -u nodopoly -p nodopoly < ./database-setup.sql