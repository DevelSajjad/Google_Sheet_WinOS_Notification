
$folder = "C:\Users\USER\Google Drive\My Drive\notifications" # replace your drive location

$filter = "*.txt"

$fsw = New-Object IO.FileSystemWatcher $folder, $filter
$fsw.IncludeSubdirectories = $false
$fsw.EnableRaisingEvents = $true

Register-ObjectEvent $fsw Created -Action {
    Start-Sleep -Milliseconds 500
    $filePath = $Event.SourceEventArgs.FullPath
    $content = Get-Content $filePath -Raw
    [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime]
    $template = [Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent([Windows.UI.Notifications.ToastTemplateType]::ToastText01)
    $textNodes = $template.GetElementsByTagName("text")
    $textNodes.Item(0).AppendChild($template.CreateTextNode($content)) | Out-Null
    $toast = [Windows.UI.Notifications.ToastNotification]::new($template)
    $notifier = [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier("Google Sheets")
    $notifier.Show($toast)
    Remove-Item $filePath
}

while ($true) { Start-Sleep -Seconds 10 }
