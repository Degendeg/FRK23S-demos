# React app till Netlify

1. `npm create vite@latest`

2. Ta bort / lägg till kod (om du vill)

---------------------------------------

1. Skapa ett konto på https://app.netlify.com/ med egenskapat konto eller SSO

2. Skapa ett team (om det inte är skapat åt dig)

3. Klicka dig in på Sites

---------------------------------------

1. I din katalog (app) skriv `git init` i cmd

2. `git add .`

3. `git commit -m "init commit"`

4. `git remote add origin https://github.com/<yourGithubUsername>/<yourRepoName>.git`

5. `git push -u origin main` där main är huvudbranchen, annars är vanligt namn `master`

-----------------------------------------

Antingen kan du för Netlify:

> Drag'n'drop = `npm run build` i cmd lokalt, ta `dist` katalogen och dra den till din nyskapade sajt

> Continous deployment = I din nyskapade sajt, gå till deployment settings och koppla din GitHub - välj ditt repo - lägg till byggkonfiguration. Viktigt är build command, public directory och annat som representerar de manuella stegen men att de görs i Netlify istället
