<input type="button" value="dropbox chooser" name="selected-file" id="db-chooser"/>
<script type="text/javascript">
    document.getElementById("db-chooser").addEventListener("DbxChooserSuccess",
        function(e) {
            alert("Here's the chosen file: " + e.files[0].link)
        }, false);
</script>
<script type="text/javascript" src="https://www.dropbox.com/static/api/1/dropins.js" id="dropboxjs" data-app-key="YOUR_APP_KEY"></script>
