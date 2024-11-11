# Infrastructure as Code with TypeScript

This is a three-tier application infrastructure using AWS CDK with TypeScript.

## Project Structure

```
InfrasAsCodeTypeScript/
├── bin/                    # CDK app entry point
├── lib/                    # Main CDK construction code
│   ├── constructs/        # Reusable constructs
│   ├── stacks/           # Stack definitions
│   └── configs/          # Configuration files
├── test/                  # Test files
├── frontend/             # Frontend application
├── backend/              # Backend application
└── scripts/              # Utility scripts
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy the infrastructure:
   ```bash
   npm run deploy:dev
   ```

## Useful Commands

* `npm run build`   - Compile TypeScript to JavaScript
* `npm run watch`   - Watch for changes and compile
* `npm run test`    - Perform the jest unit tests
* `cdk deploy`      - Deploy this stack to your default AWS account/region
* `cdk diff`        - Compare deployed stack with current state
* `cdk synth`       - Emits the synthesized CloudFormation template
