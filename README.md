# hermione-virtualbox

Hermione plugin for lounch VirtualBox.

## Install

```
npm i -D hermione-virtualbox
```

## Usage

1. Install [VirtualBox](https://www.virtualbox.org).
    ```
    brew cask install virtualbox
    ```
2. Download image (for example: [Windows](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)).

3. Create new virtual machine.

4. Configure port forwarding.

5. Run, configure system and create initial snapshot.

6. Set options for the plugin in your hermione config:
    ```
    {
        gridUrl: 'http://127.0.0.1:<PORT>/wd/hub',
        plugins: {
            'hermione-virtualbox': {
                vm: 'Machine Name'
            }
        },
        system: {
            mochaOpts: { timeout: 0 }
        }
    }
    ```

## Options

| Option | Default | Description |
| --- | --- | --- |
| `vm` | | Virtual machine name. |
| `vmStartTimeout` | `5000` | Timeout for start system. |
| `vmStopAfterEnd` | `true` | Stop virtual machine after hermione event `RUNNER_END`. |

## Licence

MIT
