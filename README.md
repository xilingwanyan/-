local CF = CFrame.new
local LatestRoom = game:GetService("ReplicatedStorage").GameData.LatestRoom
local ChaseStart = game:GetService("ReplicatedStorage").GameData.ChaseStart

local bai={
    jishi=false,
    yucezuizhu=false,
    yceguaiwu=false,
    bookes=false,
    fuces=false,
    keyesp=false,
    zidongkaimen=false
}
local bailib = loadstring(game:HttpGet"https://pastebin.com/raw/uT8BtRLA")()
local win = bailib:new("白--doors",'')
local Tab1 = win:Tab("玩家功能", "10882439086")
local Section3 = Tab1:section("玩家")
local Tab = win:Tab("主要功能", "10728953248")
local Sectionts = Tab:section("功能")
local lp=game.Players.LocalPlayer

function tp(pos)
  if typeof(pos) == "CFrame" then
   lp.Character:SetPrimaryPartCFrame(pos)
  elseif typeof(pos) == "Vector3" then
    lp.Character:MoveTo(pos)
  end
end
function notify(Title,Text,Duration) -- Sends Notification in the bottom right of the screen
    game.StarterGui:SetCore("SendNotification", {
        Title = Title;
        Text = Text;
        Icon = nil;
        Duration = Duration
    })
end
Section3:Slider('设置速度', 'Sliderflag', 16, 16, 900,false, function(s)
game:GetService("RunService").RenderStepped:Connect(function()
        pcall(function()
            game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = s
        end)
    end)
end)
local KeyChams = {}
Sectionts:Toggle("钥匙透视",'Toggleflag',false,function(s)
	for i,v in pairs(KeyChams) do
        v.Enabled = s
    end
   bai.keyesp=s
end)


local function ApplyKeyChams(inst)
    wait()
    local Cham = Instance.new("Highlight")
    Cham.DepthMode = Enum.HighlightDepthMode.AlwaysOnTop
    Cham.FillColor = Color3.new(0,0,0)
    Cham.FillTransparency = 0
    Cham.OutlineColor = Color3.new(0,0,0)
    Cham.Parent = inst
    Cham.Adornee = inst
    Cham.Enabled = bai.keyesp
    Cham.RobloxLocked = true
    return Cham
end

local KeyCoroutine = coroutine.create(function()
    workspace.CurrentRooms.DescendantAdded:Connect(function(inst)
        if inst.Name == "KeyObtain" then
            table.insert(KeyChams,ApplyKeyChams(inst))
        end
    end)
end)
for i,v in ipairs(workspace:GetDescendants()) do
    if v.Name == "KeyObtain" then
        table.insert(KeyChams,ApplyKeyChams(v))
    end
end
coroutine.resume(KeyCoroutine)

local BookChams = {}
Sectionts:Toggle("书透视",'Toggleflag',false,function(s)
    for i,v in pairs(BookChams) do
        v.Enabled =s
    end
bai.bookes=s
end)


local FigureChams = {}
Sectionts:Toggle("图形透视",'Toggleflag',false,function(s)
    for i,v in pairs(FigureChams) do
        v.Enabled =s
    end
	bai.fuces=s
end)


local function ApplyBookChams(inst)
    wait()
    local Cham = Instance.new("Highlight")
    Cham.DepthMode = Enum.HighlightDepthMode.AlwaysOnTop
    Cham.FillColor = Color3.new(0,0,0)
    Cham.FillTransparency = 0
    Cham.OutlineColor = Color3.new(0,0,0)
    Cham.Parent = inst
    Cham.Enabled = bai.bookes
    Cham.Adornee = inst
    Cham.RobloxLocked = true
    return Cham
end

local function ApplyEntityChams(inst)
    wait()
    local Cham = Instance.new("Highlight")
    Cham.DepthMode = Enum.HighlightDepthMode.AlwaysOnTop
    Cham.FillColor = Color3.new(0,0,0)
    Cham.FillTransparency = 0
    Cham.OutlineColor = Color3.new(0,0,0)
    Cham.Parent = inst
    Cham.Enabled =bai.fuces
    Cham.Adornee = inst
    Cham.RobloxLocked = true
    return Cham
end

local BookCoroutine = coroutine.create(function()
    for i,v in pairs(game:GetService("Workspace").CurrentRooms["50"].Assets:GetDescendants()) do
        if v.Name == "LiveHintBook" then
            table.insert(BookChams,ApplyBookChams(v))
            
        end
    end
end)
local EntityCoroutine = coroutine.create(function()
    local Entity = game:GetService("Workspace").CurrentRooms["50"].FigureSetup:WaitForChild("FigureRagdoll",5)
    Entity:WaitForChild("Torso",2.5)
    table.insert(FigureChams,ApplyEntityChams(Entity))
end)





local function applyLight(value)
    if value then 
        local light = Instance.new('PointLight', game.Players.LocalPlayer.Character.Head)
        light.Name='bai'
        light.Range = 150
        light.Brightness = 1.7
    else
        pcall(function()
            game.Players.LocalPlayerp.Character.Head.bai:remove();
        end);
    end;
end;


Sectionts:Toggle("头部发光",'Toggleflag',false,function(s)
	applyLight(s)
end)



Sectionts:Toggle("即时交互",'Toggleflag',false,function(s)
	bai.jishi=s
end)




game:GetService("ProximityPromptService").PromptButtonHoldBegan:Connect(function(prompt)
    if bai.jishi == true then
        fireproximityprompt(prompt)
    end
end)
Sectionts:Toggle("事件预测",'Toggleflag',false,function(s)
	bai.yucezuizhu=s
end)
Sectionts:Toggle("当怪物出现时弹提升",'Toggleflag',false,function(s)
	bai.yceguaiwu=s
end)


local NotificationCoroutine = coroutine.create(function()
    LatestRoom.Changed:Connect(function()
        spwan(function()
        if bai.yucezuizhu == true then
            local n = ChaseStart.Value - LatestRoom.Value
            if 0 < n and n < 4 then
                notify("注意!","事件发生在 " .. tostring(n) .. "房间",5)
                
            end
        end
        if bai.bookes == true then
            if LatestRoom.Value == 50 then
                coroutine.resume(BookCoroutine)
            end
        end
        if bai.fuces == true then
            if LatestRoom.Value == 50 then
                coroutine.resume(EntityCoroutine)
            end
        end
    end)
    end)
    end)
    
    workspace.ChildAdded:Connect(function(inst)
        spawn(function()
        if inst.Name == "RushMoving" and bai.yceguaiwu == true then
            notify("警告!", "Rush已出现!藏起来!",7)

        elseif inst.Name == "AmbushMoving" and bai.yceguaiwu == true then
            notify("警告!", "Ambush!已出现藏起来!",7)
         
        end
    end)
end)
Section3:Button("获得十字架",function()
local shadow=game:GetObjects("rbxassetid://11498423088")[1]
shadow.Parent = game.Players.LocalPlayer.Backpack
local Players = game:GetService("Players")
local Plr = Players.LocalPlayer
local Char = Plr.Character or Plr.CharacterAdded:Wait()
local Hum = Char:WaitForChild("Humanoid")
local RightArm = Char:WaitForChild("RightUpperArm")
local LeftArm = Char:WaitForChild("LeftUpperArm")
local RightC1 = RightArm.RightShoulder.C1
local LeftC1 = LeftArm.LeftShoulder.C1
        local function setupCrucifix(tool)
        RightArm.Name = "R_Arm"
        LeftArm.Name = "L_Arm"
        
        RightArm.RightShoulder.C1 = RightC1 * CFrame.Angles(math.rad(-90), math.rad(-15), 0)
        LeftArm.LeftShoulder.C1 = LeftC1 * CFrame.new(-0.2, -0.3, -0.5) * CFrame.Angles(math.rad(-125), math.rad(25), math.rad(25))
        for _, v in next, Hum:GetPlayingAnimationTracks() do
            v:Stop()
        end
        end
shadow.Equipped:Connect(function()
setupCrucifix(shadow)
game.Players.LocalPlayer:SetAttribute("Hidden", true)
end)
 
shadow.Unequipped:Connect(function()
    game.Players.LocalPlayer:SetAttribute("Hidden", false)
        RightArm.Name = "RightUpperArm"
        LeftArm.Name = "LeftUpperArm"
        
        RightArm.RightShoulder.C1 = RightC1
        LeftArm.LeftShoulder.C1 = LeftC1
end)
end)
Section3:Textbox("设置血量",'TextBoxfalg',"输入数字",function(s)	
spawn(function()
while task.wait() do
game.Players.LocalPlayer.Character.Humanoid.Health = s
end
end)
end)
local Noclip = nil
local Clip = nil

function noclip()
	Clip = false
	local function Nocl()
		if Clip == false and game.Players.LocalPlayer.Character ~= nil then
			for _,v in pairs(game.Players.LocalPlayer.Character:GetDescendants()) do
				if v:IsA('BasePart') and v.CanCollide and v.Name ~= floatName then
					v.CanCollide = false
				end
			end
		end
		wait(0.21) -- basic optimization
	end
	Noclip = game:GetService('RunService').Stepped:Connect(Nocl)
end

function clip()
	if Noclip then Noclip:Disconnect() end
	Clip = true
end

Section3:Toggle("穿墙",'Toggleflag',false,function(s)
if s then
noclip()
else
clip()
end
end)
Sectionts:Toggle("自动开门",'Toggleflag',false,function(s)
	bai.zidongkaimen=s
end)
local AutoSkipCoro = coroutine.create(function()
        while true do
            task.wait()
            pcall(function()
            if bai.zidongkaimen == true and game:GetService("ReplicatedStorage").GameData.LatestRoom.Value < 100 then
                local HasKey = false
                local LatestRoom = game:GetService("ReplicatedStorage").GameData.LatestRoom.Value
                local CurrentDoor = workspace.CurrentRooms[tostring(LatestRoom)]:WaitForChild("Door")
                for i,v in ipairs(CurrentDoor.Parent:GetDescendants()) do
                    if v.Name == "KeyObtain" then
                        HasKey = v
                    end
                end
                if HasKey then
                    game.Players.LocalPlayer.Character:PivotTo(CF(HasKey.Hitbox.Position))
                    task.wait(0.3)
                    fireproximityprompt(HasKey.ModulePrompt,0)
                    game.Players.LocalPlayer.Character:PivotTo(CF(CurrentDoor.Door.Position))
                    task.wait(0.3)
                    fireproximityprompt(CurrentDoor.Lock.UnlockPrompt,0)
                end
                if LatestRoom == 50 then
                    CurrentDoor = workspace.CurrentRooms[tostring(LatestRoom+1)]:WaitForChild("Door")
                end
                game.Players.LocalPlayer.Character:PivotTo(CF(CurrentDoor.Door.Position))
                task.wait(0.3)
                CurrentDoor.ClientOpen:FireServer()
            end
        end)
        end
end)
Section3:Button("飞行", function()
	loadstring("\108\111\97\100\115\116\114\105\110\103\40\103\97\109\101\58\72\116\116\112\71\101\116\40\40\39\104\116\116\112\115\58\47\47\103\105\115\116\46\103\105\116\104\117\98\117\115\101\114\99\111\110\116\101\110\116\46\99\111\109\47\109\101\111\122\111\110\101\89\84\47\98\102\48\51\55\100\102\102\57\102\48\97\55\48\48\49\55\51\48\52\100\100\100\54\55\102\100\99\100\51\55\48\47\114\97\119\47\101\49\52\101\55\52\102\52\50\53\98\48\54\48\100\102\53\50\51\51\52\51\99\102\51\48\98\55\56\55\48\55\52\101\98\51\99\53\100\50\47\97\114\99\101\117\115\37\50\53\50\48\120\37\50\53\50\48\102\108\121\37\50\53\50\48\50\37\50\53\50\48\111\98\102\108\117\99\97\116\111\114\39\41\44\116\114\117\101\41\41\40\41\10\10")()
end)
Sectionts:Button("一键通关beta", function()
 notify("白","现在只需要通关此关即可开始使用",4)
    game:GetService("Workspace").CurrentRooms.ChildAdded:Connect(function(s)
        if s.Name=="51" then
            notify("白","已进入第50关请你等待出场动画",4)
            task.wait(12)
        tp(s.RoomStart.CFrame)
    s.Door.ClientOpen:FireServer()
    s.Door.ClientOpen:FireServer()
          task.wait(0.4)
          tp(s.RoomEnd.CFrame)
             s.Door.ClientOpen:FireServer()
             s.Door.ClientOpen:FireServer()
          elseif s.Name=="100" then
            s.ChildAdded:Connect(function(d)
                
        task.wait(0.6)
          tp(d.Door.Hidden.CFrame)
      end)
             else
             task.wait(0.3)
          tp(s.RoomStart.CFrame)
                s.Door.ClientOpen:FireServer()
                s.Door.ClientOpen:FireServer()
                    s.Door.ClientOpen:FireServer()
                s.Door.ClientOpen:FireServer()
          task.wait(0.3)
          tp(s.RoomEnd.CFrame)
              s.Door.ClientOpen:FireServer()
                s.Door.ClientOpen:FireServer()
             s.Door.ClientOpen:FireServer() 
             s.Door.ClientOpen:FireServer()
      end
              end)
           end)
coroutine.resume(AutoSkipCoro)
coroutine.resume(NotificationCoroutine)
