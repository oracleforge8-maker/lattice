$sshDir = Join-Path $env:USERPROFILE '.ssh'
if (-not (Test-Path $sshDir)) {
    New-Item -ItemType Directory -Path $sshDir -Force | Out-Null
}
$keyPath = Join-Path $sshDir 'id_ed25519'
ssh-keygen -t ed25519 -C 'oracleforge8@gmail.com' -f $keyPath -N '""'
Get-Content ($keyPath + '.pub')
