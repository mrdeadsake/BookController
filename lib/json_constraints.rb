class JsonConstraints
  def matches?(req)
    req.headers["Accept"].include?("application/json")
  end
end
