/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { Command, Flags, ux } from '@oclif/core'
import Logger from '@adobe/aio-lib-core-logging'
const aioLogger = Logger('PLUGINNAME', { provider: 'debug' })

export class IndexCommand extends Command {
  async run () {
    // const { args, flags } = await this.parse(IndexCommand)
    aioLogger.debug('this is the index command.')

    this.log('hello world')
    ux.action.start('doing things')
    ux.action.stop()
  }
}

IndexCommand.flags = {
  someflag: Flags.string({ char: 'f', description: 'this is some flag' })
}

IndexCommand.description = 'Your description here'
IndexCommand.examples = [
  '$ aio PLUGINNAME:some_command'
]
