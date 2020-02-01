

1. -----create files

2. -----sudo chown -R $USER:$USER /var/www/dicTees/index.html

3. -----sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/dickTees.org.conf

4. -----sudo nano /etc/apache2/sites-available/dickTees.org.conf

5. -----Add under serverAdmin

	ServerName dickTees.org
	ServerAlias www.dickTees.org

     ----Save and close

6. ---sudo systemctl reload apache2

7. ----sudo service apache2 restart



