-- Made By Silent18 (LYT Scripters) Discord Server:https://discord.gg/KxxxWbw
 
local ScreenGui = Instance.new("ScreenGui")
local Frame = Instance.new("Frame")
local TextLabel = Instance.new("TextLabel")
local TextLabel_2 = Instance.new("TextLabel")
local TextButton = Instance.new("TextButton")
local TextButton_2 = Instance.new("TextButton")

-- Properties

ScreenGui.Parent = game.CoreGui

Frame.Parent = ScreenGui
Frame.Active = true
Frame.BackgroundColor3 = Color3.new(0.666667, 0, 0)
Frame.BackgroundTransparency = 0.5
Frame.Draggable = true
Frame.Position = UDim2.new(0, 460, 0, 370)
Frame.Size = UDim2.new(0, 240, 0, 250)

TextLabel.Parent = Frame
TextLabel.BackgroundColor3 = Color3.new(1, 1, 1)
TextLabel.BackgroundTransparency = 3
TextLabel.Position = UDim2.new(0, 0, 0, 20)
TextLabel.Size = UDim2.new(0, 240, 0, 60)
TextLabel.Font = Enum.Font.SciFi
TextLabel.Text = "Vietnam GUI v1.0"
TextLabel.TextColor3 = Color3.new(1, 0, 0)
TextLabel.TextScaled = true
TextLabel.TextSize = 14
TextLabel.TextWrapped = true

TextLabel_2.Parent = Frame
TextLabel_2.BackgroundColor3 = Color3.new(1, 1, 1)
TextLabel_2.BackgroundTransparency = 3
TextLabel_2.Position = UDim2.new(0, 0, 0, 180)
TextLabel_2.Size = UDim2.new(0, 240, 0, 80)
TextLabel_2.Font = Enum.Font.SciFi
TextLabel_2.Text = "Made By Silent"
TextLabel_2.TextColor3 = Color3.new(0, 1, 0)
TextLabel_2.TextScaled = true
TextLabel_2.TextSize = 14
TextLabel_2.TextWrapped = true

TextButton.Parent = Frame
TextButton.BackgroundColor3 = Color3.new(0.333333, 0, 0)
TextButton.BackgroundTransparency = 0.40000000596046
TextButton.Position = UDim2.new(0, 0, 0, 80)
TextButton.Size = UDim2.new(0, 240, 0, 50)
TextButton.Font = Enum.Font.Highway
TextButton.Text = "Aimbot"
TextButton.TextColor3 = Color3.new(1, 0, 0)
TextButton.TextScaled = true
TextButton.TextSize = 24
TextButton.TextWrapped = true
TextButton.MouseButton1Click:connect(function()
    loadstring(game:GetObjects('rbxassetid://574594561')[1].Source)()
end)

TextButton_2.Parent = Frame
TextButton_2.BackgroundColor3 = Color3.new(0.333333, 0, 0)
TextButton_2.BackgroundTransparency = 0.40000000596046
TextButton_2.Position = UDim2.new(0, 0, 0, 130)
TextButton_2.Size = UDim2.new(0, 240, 0, 50)
TextButton_2.Font = Enum.Font.Highway
TextButton_2.Text = "ESP"
TextButton_2.TextColor3 = Color3.new(1, 0, 0)
TextButton_2.TextScaled = true
TextButton_2.TextSize = 24
TextButton_2.TextWrapped = true
TextButton_2.MouseButton1Click:connect(function()
    --[[
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¦¦_¦¯_-¦¦¯¦¯¦¦¦¯¦¯¦¦¦¦¯¯¦¦¦_¦¦¦¦¦¦¯¦¯¦¦¦¦¦¦¦¦¯¯¦¦¦¦¦_¦¦¦¦¦
¦¦¦__¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¯¯¦¦¦¦¦¦¦¦¦¦¦¦¦¦-¦¦¦¦¦¦_¦¦¦¦¦¦¦¦¦¦¦¦
¦¦¦-¦¦¦¦¦_¦_¦¦¦_¦_¦¦¦¦__¦¦¦¦¦¦¦¦¦¦_¦_¦¦¦¦¦¦¦¦¦_¦¦¦¦¦¦¦¦¦¦¦
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
            
                ESP made by Crystal Junkie
    v3rmillion.net/member.php?action=profile&uid=372628
                     
                    Have Fun with it
--]]












    trans = 0.5

warn ("....................................................................................")
print ("                                ESP loaded. Enjoy!")
warn ("....................................................................................")

    while true do    
    for i,l in pairs(game:GetService("Players"):GetChildren()) do
        if l ~= game:GetService("Players").LocalPlayer then
        for i,v in pairs(l.Character:GetChildren()) do
            if v.ClassName == "MeshPart" or "Part" and v.Name ~= "HumanoidRootPart" then
            --
                xd = Instance.new("SurfaceGui")
                xd.Face = Enum.NormalId.Back
            xd.Parent = v
            xd.AlwaysOnTop = true
            Frame = Instance.new("Frame")
            Frame.Parent = xd
            Frame.BackgroundColor3 = Color3.new(1, 1, 1)
            Frame.Size = UDim2.new(1, 0, 1, 0)
            Frame.BackgroundTransparency = trans
            
            if l.Team ~= game:GetService("Players").LocalPlayer.Team then
                Frame.BackgroundColor3 = Color3.new(255,0 ,0)
                else Frame.BackgroundColor3 = Color3.new(0, 255, 255)

            end
            
            --
            
                xd = Instance.new("SurfaceGui")
                xd.Face = Enum.NormalId.Bottom
            xd.Parent = v
            xd.AlwaysOnTop = true
            Frame = Instance.new("Frame")
            Frame.Parent = xd
            Frame.BackgroundColor3 = Color3.new(1, 1, 1)
            Frame.Size = UDim2.new(1, 0, 1, 0)
            Frame.BackgroundTransparency = trans
            
            if l.Team ~= game:GetService("Players").LocalPlayer.Team then
                Frame.BackgroundColor3 = Color3.new(255,0 ,0)
                else Frame.BackgroundColor3 = Color3.new(0, 255, 255)

            end

            --
            
            xd = Instance.new("SurfaceGui")
                xd.Face = Enum.NormalId.Front
            xd.Parent = v
            xd.AlwaysOnTop = true
            Frame = Instance.new("Frame")
            Frame.Parent = xd
            Frame.BackgroundColor3 = Color3.new(1, 1, 1)
            Frame.Size = UDim2.new(1, 0, 1, 0)
            Frame.BackgroundTransparency = trans
            
            if l.Team ~= game:GetService("Players").LocalPlayer.Team then
                Frame.BackgroundColor3 = Color3.new(255,0 ,0)
                else Frame.BackgroundColor3 = Color3.new(0, 255, 255)

            end
            
            
            --
            
            xd = Instance.new("SurfaceGui")
                xd.Face = Enum.NormalId.Left
            xd.Parent = v
            xd.AlwaysOnTop = true
            Frame = Instance.new("Frame")
            Frame.Parent = xd
            Frame.BackgroundColor3 = Color3.new(1, 1, 1)
            Frame.Size = UDim2.new(1, 0, 1, 0)
            Frame.BackgroundTransparency = trans
            
            if l.Team ~= game:GetService("Players").LocalPlayer.Team then
                Frame.BackgroundColor3 = Color3.new(255,0 ,0)
                else Frame.BackgroundColor3 = Color3.new(0, 255, 255)

            end
            --
            
            xd = Instance.new("SurfaceGui")
                xd.Face = Enum.NormalId.Right
            xd.Parent = v
            xd.AlwaysOnTop = true
            Frame = Instance.new("Frame")
            Frame.Parent = xd
            Frame.BackgroundColor3 = Color3.new(1, 1, 1)
            Frame.Size = UDim2.new(1, 0, 1, 0)
            Frame.BackgroundTransparency = trans
            
        if l.Team ~= game:GetService("Players").LocalPlayer.Team then
                Frame.BackgroundColor3 = Color3.new(255,0 ,0)
                else Frame.BackgroundColor3 = Color3.new(0, 255, 255)

            end
            --
            
            xd = Instance.new("SurfaceGui")
                xd.Face = Enum.NormalId.Top
            xd.Parent = v
            xd.AlwaysOnTop = true
            Frame = Instance.new("Frame")
            Frame.Parent = xd
            Frame.BackgroundColor3 = Color3.new(1, 1, 1)
            Frame.Size = UDim2.new(1, 0, 1, 0)
            Frame.BackgroundTransparency = trans
            
            
            if l.Team ~= game:GetService("Players").LocalPlayer.Team then
                Frame.BackgroundColor3 = Color3.new(255,0 ,0)
                else Frame.BackgroundColor3 = Color3.new(0, 255, 255)

            end
        
            
        
                
            end
        end
        end
        end
        
    wait (5)
        for i,v in pairs (game:GetService("Players"):GetChildren()) do
            for i,k in pairs(v.Character:GetChildren()) do
            for i,l in pairs(k:GetChildren()) do
            if l.ClassName == "SurfaceGui" then
                l:Remove()
            end
            end
            end
            end
            
        end
end)
