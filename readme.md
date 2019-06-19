#### Login to Google Cloud from the CLI
```bash
gcloud auth login
```

#### From our app's home dir
```bash
gcloud config set project <project-id(mine: ci-example-218319)>
```

#### Manually deploy the default version per gae's requirement
```bash
gcloud app deploy app.yaml
```

