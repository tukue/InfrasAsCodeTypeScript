#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VpcStack } from '../lib/stacks/vpc-stack';
import { DatabaseStack } from '../lib/stacks/database-stack';
import { BackendStack } from '../lib/stacks/backend-stack';
import { FrontendStack } from '../lib/stacks/frontend-stack';
import { MonitoringStack } from '../lib/stacks/monitoring-stack';

const app = new cdk.App();

const vpcStack = new VpcStack(app, 'VpcStack');
const databaseStack = new DatabaseStack(app, 'DatabaseStack', {
  vpc: vpcStack.vpc
});
const backendStack = new BackendStack(app, 'BackendStack', {
  vpc: vpcStack.vpc,
  database: databaseStack.database
});
const frontendStack = new FrontendStack(app, 'FrontendStack', {
  vpc: vpcStack.vpc,
  backendApi: backendStack.api
});
new MonitoringStack(app, 'MonitoringStack', {
  frontend: frontendStack.service,
  backend: backendStack.service,
  database: databaseStack.database
});
